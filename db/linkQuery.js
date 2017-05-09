const pg = require('./knex')

function respondAndRenderTodo(id, res, viewName) {
      if(typeof id != 'undefined') {
      pg('ideas')
        .select()
        .where('id', id)
        .first()
        .then(ideass => {
          res.render(viewName, ideass);
        })
        } else {
          res.status(500);
          res.render('error', {
            message: 'Invalid ID'
          })
        }
    }

function newIdea(body){
  console.log(body);
  console.log("hello everybody");
  return pg('ideas').insert({
    title: body.title,
    description: body.description,
    excitement: body.excitement,
    difficulty: body.difficulty,
    date: new Date()
  })

}

    module.exports = {
      respondAndRenderTodo,
      newIdea
    }
