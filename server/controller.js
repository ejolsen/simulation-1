module.exports = {
  
    read: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
          .then(response => { res.status(200).send(response) });
          
    },

    post: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { name, price, img } = req.body;
        console.log(req.body)
        dbInstance.create_product([ name, price, img ])
          .then( () => res.status(200).send('Great Job!') )
          .catch( () => res.status(500).send() );
    }
}