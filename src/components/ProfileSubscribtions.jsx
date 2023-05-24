import "../css/ProfileSubscribtions.css"

export const ProfileSubscribtions = () =>{
    return(
        <div className="text-p">
            <p className="h2">Рассылка</p>
            <p className="h5 my-3">Здесь вы можете включать и отключать рассылку, когда угодно </p>
            <p className="h3 mb-2">Полезная информация от магазина по эл.почте</p>
            <div className="d-flex flex-row">
                <p className="h5 me-3">Вы будете получать эл.письма с информацией о бонусах, акциях и новых поступлениях магазина.</p>
                <input type="checkbox" name="" id="" />
            </div>
            <p className="h2 mt-4">Подписки</p>
        </div>
    )
} 