import s from './Header.module.css'
import logo from '../../img/Group.png'
import rain from '../../img/invert_colors_black_24dp 2.svg'



const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.name}>
                <img className={s.name_logo} src={logo} alt="logo" />
                <p className={s.name_text}>React weather</p>
            </div>
            <div className={s.search}>
                <img className={s.search_img} src={rain} alt="rain" />
                <input className={s.search_input} type="search" />
            </div>
        </div>
    )
}

export default Header