import React , {Component} from 'react';
import Aux from '../../Hoc/Auxilliary';
import LeftMenu from '../../Components/LeftMenu/LeftMenu';
import NavigationItems from '../../Components/NavigationItems/NavigationItems';
import MiddlePage from '../../Components/MiddlePage/MiddlePage';
import Rightpage from '../../Components/Rightpage/Rightpage';
class Pagebuild extends Component {
    render(){
        return (
            <Aux>
                <NavigationItems/>
                
                <div  style={{display:'flex',flexDirection:'row'}}>
                    <LeftMenu/>
                    <MiddlePage/>
                    <Rightpage/>
                </div>
                
                
            </Aux>
        );
    }
}
export default Pagebuild;