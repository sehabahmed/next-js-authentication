import { authOptions } from "@/app/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      {session?.user && (
        <div>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          {session.user?.email && (
            <h1 className="text-4xl text-center mt-10">
              Email: {session?.user?.email}
            </h1>
          )}
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={100}
            height={100}
            className="rounded-full mx-auto mt-6"
          />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
