var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _categories = require("./categories");
var _customers = require("./customers");
var _owners = require("./owners");
var _payment_metodes = require("./payment_metodes");
var _product_comments = require("./product_comments");
var _product_images = require("./product_images");
var _product_likes = require("./product_likes");
var _product_vouchers = require("./product_vouchers");
var _products = require("./products");
var _roles = require("./roles");
var _store_banners = require("./store_banners");
var _stores = require("./stores");
var _tags = require("./tags");
var _transaction_statuses = require("./transaction_statuses");
var _transactions = require("./transactions");
var _users = require("./users");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var owners = _owners(sequelize, DataTypes);
  var payment_metodes = _payment_metodes(sequelize, DataTypes);
  var product_comments = _product_comments(sequelize, DataTypes);
  var product_images = _product_images(sequelize, DataTypes);
  var product_likes = _product_likes(sequelize, DataTypes);
  var product_vouchers = _product_vouchers(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var store_banners = _store_banners(sequelize, DataTypes);
  var stores = _stores(sequelize, DataTypes);
  var tags = _tags(sequelize, DataTypes);
  var transaction_statuses = _transaction_statuses(sequelize, DataTypes);
  var transactions = _transactions(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  product_comments.belongsTo(customers, { as: "customer", foreignKey: "customer_id"});
  customers.hasMany(product_comments, { as: "product_comments", foreignKey: "customer_id"});
  transactions.belongsTo(customers, { as: "customer", foreignKey: "customer_id"});
  customers.hasMany(transactions, { as: "transactions", foreignKey: "customer_id"});
  products.belongsTo(owners, { as: "product_owner", foreignKey: "product_owner_id"});
  owners.hasMany(products, { as: "products", foreignKey: "product_owner_id"});
  stores.belongsTo(owners, { as: "owner", foreignKey: "owner_id"});
  owners.hasMany(stores, { as: "stores", foreignKey: "owner_id"});
  transactions.belongsTo(payment_metodes, { as: "payment_metode", foreignKey: "payment_metode_id"});
  payment_metodes.hasMany(transactions, { as: "transactions", foreignKey: "payment_metode_id"});
  products.belongsTo(product_vouchers, { as: "product_voucher", foreignKey: "product_voucher_id"});
  product_vouchers.hasMany(products, { as: "products", foreignKey: "product_voucher_id"});
  product_comments.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(product_comments, { as: "product_comments", foreignKey: "product_id"});
  product_images.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(product_images, { as: "product_images", foreignKey: "product_id"});
  product_likes.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(product_likes, { as: "product_likes", foreignKey: "product_id"});
  transactions.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(transactions, { as: "transactions", foreignKey: "product_id"});
  users.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(users, { as: "users", foreignKey: "role_id"});
  categories.belongsTo(stores, { as: "store", foreignKey: "store_id"});
  stores.hasMany(categories, { as: "categories", foreignKey: "store_id"});
  product_vouchers.belongsTo(stores, { as: "store", foreignKey: "store_id"});
  stores.hasMany(product_vouchers, { as: "product_vouchers", foreignKey: "store_id"});
  store_banners.belongsTo(stores, { as: "store", foreignKey: "store_id"});
  stores.hasMany(store_banners, { as: "store_banners", foreignKey: "store_id"});
  tags.belongsTo(stores, { as: "store", foreignKey: "store_id"});
  stores.hasMany(tags, { as: "tags", foreignKey: "store_id"});
  transactions.belongsTo(transaction_statuses, { as: "transaction_status", foreignKey: "transaction_status_id"});
  transaction_statuses.hasMany(transactions, { as: "transactions", foreignKey: "transaction_status_id"});
  customers.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(customers, { as: "customers", foreignKey: "user_id"});
  owners.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(owners, { as: "owners", foreignKey: "user_id"});

  return {
    SequelizeMeta,
    categories,
    customers,
    owners,
    payment_metodes,
    product_comments,
    product_images,
    product_likes,
    product_vouchers,
    products,
    roles,
    store_banners,
    stores,
    tags,
    transaction_statuses,
    transactions,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
