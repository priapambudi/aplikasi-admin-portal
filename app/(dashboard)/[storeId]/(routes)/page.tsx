import db from "@/lib/db";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <div>
      <h1>active store = {store?.name}</h1>
    </div>
  );
};

export default DashboardPage;
