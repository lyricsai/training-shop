import { Formik } from 'formik'
import './Form.css'

const Form = (props) => {
    return (
        <Formik
            initialValues={{ email: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = '';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className={props.classname} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Enter your email"
                    />
                    {errors.email && touched.email && errors.email}
                    <button className={props.btnStyle} type="submit" disabled={isSubmitting}>
                        {props.text}
                    </button>
                </form>
            )}
        </Formik>
    )
}

export default Form