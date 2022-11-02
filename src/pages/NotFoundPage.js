import * as Icon from 'react-icons/ai'
import * as Bootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div> 
        <div className='text-center m-5'>
            <h1>Error 404 Page Not Found</h1>
            <div>
                <Bootstrap.Spinner className='my-5 mx-2' animation="grow" variant="danger" />
                <Bootstrap.Spinner className='my-5 mx-2' animation="grow" variant="danger" />
                <Bootstrap.Spinner className='my-5 mx-2' animation="grow" variant="danger" />
                <Bootstrap.Spinner className='my-5 mx-2' animation="grow" variant="danger" />
                <Bootstrap.Spinner className='my-5 mx-2' animation="grow" variant="danger" />
            </div>
            <div>
                <Link to='/'>
                    <Bootstrap.Button variant="dark">Go Home <Icon.AiFillHome /> </Bootstrap.Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage