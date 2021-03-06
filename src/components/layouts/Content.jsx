import React from 'react'
// Fazer o import para navegação
import { Switch, Route } from 'react-router-dom'
import '../layouts/Content.css'
// Realizar o import para o about e o home o Switch ficará no Content
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'

const Content = props => (
    <main className="content">
        <Switch>
            {/* O uso do exact: só entrará no home se estiver apenas o / e no inícioc ou final do Route */}
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">{/* O id terá valor literal ou seja variável aplicando lá no menu a variável ou numero  */}
                <Param />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
            {/* Ao usar o asterisco siginifica que qualquer outra url menos as que não estiverem na rota irá cair aqui */}
        </Switch>
    </main>
)
export default Content




















// Dentro deViews é como se fosse um componente que apresenta a tela inteira, já em Components apenas partes de uma tela