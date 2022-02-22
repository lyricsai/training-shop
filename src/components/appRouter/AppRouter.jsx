import './AppRouter.css'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from '../../utils/routes'

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component, category }) =>
                <Route key={path} exact path={path} element={<Component category={category} />} />
            )}
        </Routes>
    )
}

export default AppRouter