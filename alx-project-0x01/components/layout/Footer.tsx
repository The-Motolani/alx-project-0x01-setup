import Link from 'next/link';

const Footer: React.FC = () => {
    return(
        <footer className = 'bg-blue-600 text-white shadow-md py-4'>
            <div className ='container mx-auto flex justify-between items-center px-4'>
                <p className = "font-bold text-2xl">
                    <Link href='/'>Learning Next.js</Link>
                </p>
                <nav>
                    <ul className='flex space-x-6'>
                        <li className='hover:underline'>
<Link href = '/posts'>Posts</Link>
                        </li>
                        < li className='hover:underline'>
                        <Link href='/users'>Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;