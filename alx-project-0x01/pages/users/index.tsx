import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import { useState } from 'react';
import { UserData, UserModalProps } from '@/interfaces';
import Footer from "@/components/layout/Footer";
import UserModal from '@/components/common/UserModal';

const Users: React.FC<UserProps[]> = ({users}) =>
{
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);
    
    const handleAddUser = (newPost: PostData) => {
        setPost({...newUser, id: users.length + 1 });
};

return (
        <>
        <div className="flex flex-col h-screen">
      <Header />
      <main className='p-4'>
        <div className="flex justify-between">
      <h1 className=" text-2xl font-semibold">
        User Directory
      </h1>
      <button onClick={() => setModalOpen(true)}
      className="bg-blue-700 px-4 py-2 rounded-full text-white">
        Add User
        </button>
        </div>
      <div className="grid grid-cols-3 gap-2">

        {
        users.map(({name, username, email, phone, company, website, address, geo, id }: UserProps, key: number) => (
          <UserCard name={name} username={username} email={email} phone={phone} company={company} website={website} address={address} geo={geo} id={id} key={key} />
        ))
        }
        </div>
      </main>
      <Footer />

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser}/>

      )}
    </div> 
    </>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;