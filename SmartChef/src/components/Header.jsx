import smartCheflogo from "/home/anuj/Desktop/reactJS/SmartChef/src/assets/images/chef-claude-icon.png"

export default function Header(){
    return (
        <header>
            <img src={smartCheflogo} alt="" />
            <h1>smartChef</h1>
        </header>
    )
}