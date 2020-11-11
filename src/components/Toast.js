import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuid } from 'uuid'


const defaultToast = toast
const bannerToast = toast

defaultToast.configure({
	position: toast.POSITION.BOTTOM_RIGHT,
	autoClose: 3000,
	pauseOnFocusLoss: false,
	toastId: uuid(),
	draggablePercent: 60,
})

bannerToast.configure({
	position: toast.POSITION.TOP_RIGHT,
	autoClose: false,
	pauseOnFocusLoss: false,
	closeOnClick:false,
	toastId: uuid(),
	draggable: false,
	limit: 1
})

export { defaultToast, bannerToast}