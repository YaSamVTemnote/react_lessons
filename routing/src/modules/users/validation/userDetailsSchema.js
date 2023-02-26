import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('!!!Required!!!').max(20).min(3).label('User Name'),
    email: yup.string().email().required(),
    address: yup.object().shape({})
})


const stepper = {
    steps: 0,
    up: () => {
        this.steps++
        return this
    },
    down: () => {
        this.steps--
        return this
    }
}

stepper.down().up().down().up()
