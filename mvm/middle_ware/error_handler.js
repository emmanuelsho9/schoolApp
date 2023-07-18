const errorHandleMiddleWare = (err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
   err.status = err.status || "error";
   res.status(statusCode).json({
     status: statusCode,
     message: err.message,
     stackTrace: err.stackTrace
   });
   next()

  };

    module.exports = errorHandleMiddleWare;
