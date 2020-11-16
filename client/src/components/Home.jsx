import {Link} from '@reach/router';

export const Home= props =>{
    return(
        <div>
            <h1>Yargh, welcome to the Pirates of the Carried Beans!</h1>
            {/* <Link to="/pirates/add">Create Your ScallyWag!</Link>
            <br /> */}
            <Link to="/pirates">View The Heathens!</Link>
        </div>
    )
}