import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({name, username, email, phone, company, website, address, geo, id }) =>
{
    return(
        <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition">
     <span>User ID: {id} </span>
      <h2 className="text-xl font-bold text-blue-700 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">@{username}</p>
      <p className="text-gray-700 mb-3">{email}</p>
      <div className="text-sm text-gray-500 mb-3">
        <p>
          <span className="font-semibold">Address:</span> {address.suite},{" "}
          {address.street}, {address.city}
        </p>
        <p>
          <span className="font-semibold">Zip:</span> {address.zipcode}
        </p>
      </div>

      <div className="text-sm text-gray-500 mb-3">
        <p>
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>

      <div className="text-sm text-gray-500">
        <p className="font-semibold">{company.name}</p>
        <p>{company.catchPhrase}</p>
        <p className="italic">{company.bs}</p>
      </div>
    </div>
  );
};
    
export default UserCard;