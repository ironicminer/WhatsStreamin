const db = require("../models");

module.exports = function(app) {
  app.post("/api/watchlist", req => {
    db.watchlist.create(req.body).then(() => {
      console.log("it worked!");
    });
  });

  app.delete("/api/users/delete/:id", req => {
    db.user
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        console.log("delted");
      });
  });

  app.delete("/api/watchlist/delete/:id", req => {
    db.watchlist
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        console.log("deleted");
      });
  });
};
