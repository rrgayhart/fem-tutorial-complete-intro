var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div
var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Props are great!', color: 'rebeccaspurple'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'Props are the best!', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
