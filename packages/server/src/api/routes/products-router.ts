import { Router } from 'express';
import { Products } from '../../models/products-model';
import {
  getAllProducts,
  getProductById,
  getProductByName,
  createProduct,
  sortingProductByPrice,
  getProductsCount,
} from '../controllers/products-controller';

export const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:name', getProductByName);
productsRouter.post('/get-products-count', getProductsCount);
productsRouter.post('/create-product', createProduct);

productsRouter.get('/test/test', function (req, res) {
  const getProductsCount = Products.count({});
  console.log('count item ' + getProductsCount);
  res.json(getProductsCount);
});

//productsRouter.post('/:name', getProductByName);
//productsRouter.get('/a/:sort', sortingProductByPrice);
//
// productsRouter.post('/get-users-count', function (req, res) {
//   const pagination = req.body.pagination ? parseInt(req.body.pagination) : 10;
//   //PageNumber From which Page to Start
//   const pageNumber = req.body.page ? parseInt(req.body.page) : 1;
//   Products.find({})
//     //skip takes argument to skip number of entries
//     .sort({ id: 1 })
//     .skip((pageNumber - 1) * pagination)
//     //limit is number of Records we want to display
//     .limit(pagination)
//     .then((data) => {
//       res.status(200).send({
//         users: data,
//       });
//     })
//     .catch((err) => {
//       res.status(400).send({
//         err: err,
//       });
//     });
// });
