import EmpActionBtn from "../../components/Buttons/EmpActionBtn";
import EmployeeTable from "../../components/Table/EmployeeTable";

const EmployeeDetailsPage = () => {
  const items = [
    {
      title: "Web Syner",
      quantity: 150,
    },
    {
      title: "Web Syner",
      quantity: 150,
    },
    {
      title: "Web Syner",
      quantity: 150,
    },
  ];
  return (
    <div className="">
      <div>
        <div
          className="h-60 bg-contain"
          style={{
            backgroundImage:
              'URL("https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-coffee-biscuit-western-afternoon-tea-literary-banner-image_175420.jpg")',
          }}
        ></div>
        <div className="biscuit-container -mt-12 flex flex-col mb-12 lg:mb-20">
          <div className="rounded-2xl bg-white overflow-hidden">
            <div className="w-full flex items-center gap-4 p-4 bg-primary/20">
              <div className="h-[110px] w-[110px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={
                    "https://cdn.prod.website-files.com/5fbb9b89508062592a9731b1/6448c1ce35d6ffe59e4d6f46_GettyImages-1399565382.jpg"
                  }
                  alt="Profile Image"
                />
              </div>
              <div className="text-accent">
                <h2 className="text-2xl font-semibold">Jahid Hasan Morol</h2>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm py-1 px-2 bg-primary/50 rounded-md leading-[1em]">
                    Sales Representative
                  </span>
                  <p className="text-base font-medium uppercase">
                    Target: 1,35,000/7,00,00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5 text-accent">
            {items?.map((item, index) => (
              <div
                key={index}
                className="py-5 px-4 rounded-xl bg-white border border-primary w-full shadow-md shadow-primary/70"
              >
                <p className="text-base font-medium text-accent/80">
                  {item.title}
                </p>
                <h4 className="text-3xl font-semibold  text-secondary">
                  {item.quantity}
                </h4>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <EmpActionBtn />
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-semibold">
              Recent <span className="text-secondary">Order</span> List
            </h2>
            <div className="mt-3 *:mb-5">
              <EmployeeTable />
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-semibold">
              About <span className="text-secondary">Jahid Hasan Morol</span>
            </h2>
            <div className="mt-3 *:mb-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus laudantium soluta ipsa pariatur illum, repudiandae,
                eveniet voluptate doloremque est, nam veritatis quam rem tempore
                at quasi nobis nulla maiores beatae necessitatibus aspernatur
                illo? Eaque accusantium minus quia maxime, omnis velit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur ipsam tenetur quo adipisci voluptatem nihil est
                officiis maiores ad aut?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                ipsa voluptate beatae laudantium minus sit ducimus ab eum?
                Vitae, tempora officiis! Nihil culpa pariatur maxime quas at,
                sapiente laudantium, delectus ab quidem iusto architecto
                assumenda quos fugit impedit numquam! Iure id sequi
                exercitationem modi tempore nulla libero esse! Veritatis laborum
                perspiciatis harum non, laboriosam explicabo sapiente totam
                placeat necessitatibus incidunt!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsPage;
