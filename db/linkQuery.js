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

function ideaInfo(id) {
  return pg('ideas')
    .where('id', id)
}

function updateIdea(body, id){
  console.log("hello everybody");
  return pg('ideas').where('id', id).update({
    'title': body.title,
    'description': body.description,
    'excitement': body.excitement,
    'difficulty': body.difficulty,
    'notes': body.notes,
    'defFeatures': body.defFeatures,
    'posFeatures': body.posFeatures,
    'market': body.market,
    'valueAdd': body.valueAdd,
    'competition': body.competition,
    'compImprove': body.compImprove,
    'techUsed': body.techUsed,
    'challenges': body.challenges,
    'resources': body.resources,
    'purpose': body.purpose,
    'research': body.research,
    'links': body.links,
    'stage': body.stage,
    'date': new Date()
  })
}

function deleteIdea(id) {
  return pg('ideas').where(
  'id', id).del()
}

    module.exports = {
      respondAndRenderTodo,
      newIdea,
      ideaInfo,
      updateIdea,
      deleteIdea
    }
