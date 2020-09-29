require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId) {
    res.send([]);
  } else {
    const sql = `
    select "c"."cartItemId",
           "c"."price",
           "p"."productId",
           "p"."image",
           "p"."name",
           "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
    where "c"."cartId" = $1
    `;
    const cartId = [req.session.cartId];
    db.query(sql, cartId)
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => next(err));
  }
});

app.post('/api/cart', (req, res, next) => {
  const sql = `
    select "price"
      from "products"
     where "productId" = $1
  `;

  if (!req.body.productId) {
    res.status(400).json({
      error: 'Invalid Entry'
    });
  } else {
    const productId = [parseInt(req.body.productId, 10)];
    db.query(sql, productId)
      .then(price => {
        if (!price.rows[0]) {
          throw (new ClientError(`product ${productId} does not exist`, 400));
        } else {
          if (req.session.cartId) {
            return {
              cartId: req.session.cartId,
              price: price.rows[0].price
            };
          } else {
            const cart = `
            insert into "carts" ("cartId", "createdAt")
            values (default, default)
            returning "cartId"
            `;
            return db.query(cart)
              .then(cartId => {
                return {
                  cartId: cartId.rows[0].cartId,
                  price: price.rows[0].price
                };
              });
          }

        }
      })
      .then(result => {
        req.session.cartId = result.cartId;
        const cartItems = `
          insert into "cartItems" ("cartId", "productId", "price")
          values ($1, $2, $3)
          returning "cartItemId"
        `;
        const values = [parseInt(result.cartId, 10), productId[0], result.price];
        return db.query(cartItems, values);
      })
      .then(result => {
        const sql = `
          select "c"."cartItemId",
          "c"."price",
          "p"."productId",
          "p"."image",
          "p"."name",
          "p"."shortDescription"
          from "cartItems" as "c"
          join "products" as "p" using ("productId")
          where "c"."cartItemId" = $1
        `;
        const value = [result.rows[0].cartItemId];
        return db.query(sql, value)
          .then(cartItem => {
            res.status(201).json(cartItem.rows[0]);
          });
      })
      .catch(err => next(err));
  }
});

app.get('/api/products', (req, res, next) => {
  const sql = `
    select "productId", "name", "price", "image", "shortDescription"
      from "products"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const sql = `
    select *
      from "products"
      where "productId" = $1
  `;
  const value = [parseInt(req.params.productId, 10)];
  db.query(sql, value)
    .then(result => {
      if (result.rows[0]) {
        res.json(result.rows[0]);
      } else {
        next(new ClientError(`product ${value} does not exist`, 404));
      }
    })
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
