
const pagination = async (req: any, res: any, next: () => any) => {
  req.body.page = req.query.page ? parseInt(req.query.page) : 1
  if (req.body.page % 1 !== 0) req.body.page = 1
  req.body.limit = req.query.limit ? parseInt(req.query.limit) : 1
  if (req.body.limit % 1 !== 0) req.body.limit = 10
  return next();
};

export default pagination;