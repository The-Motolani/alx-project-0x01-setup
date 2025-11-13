import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';


const Users: React.FC<UserProps[]> = ({posts}) =>
{
    return (
        <>
        <Header />
        <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        User Directory
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
        posts.map(({name, username, email, phone, company, website, address, geo, id }: UserProps, key: number) => (
          <UserCard name={name} username={username} email={email} phone={phone} company={company} website={website} address={address} geo={geo} id={id} key={key} />
        ))
        }
      </div>
    </div> 
    </>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;