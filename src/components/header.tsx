import './header.css';

interface HeaderProps{
    title: string;
    //title?: string; torna opcional, assim se o valor não for infomado ele exibiram um valor padrão: Header({title = "React"}: HeaderProps)
}

export function Header({title}: HeaderProps){
    return(
        <header className='header'>
            <h1 className='title'>{title}</h1>

            <hr />
        </header>
    )
}