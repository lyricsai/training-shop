import './AppRouter.css'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from '../../utils/routes'

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component, productType }) =>
                <Route key={path} exact path={path} element={<Component productType={productType} />} />
            )}
        </Routes>
    )
}

export default AppRouter