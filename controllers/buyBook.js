
exports.buybook=(req, res)=> {
    console.log("Server side data",req.body);
    res.send(
      req.body,
    );
  }