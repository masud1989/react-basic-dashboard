import { BsCart, BsCart2, BsCart3, BsChevronLeft } from "react-icons/bs";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title ">
        <div className="sidebar-brand flex">
          <BsCart className="icon_header" />
          SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          <BsChevronLeft />
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item ">
          <a href="" className="flex">
            <BsCart3 className="icon" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex">
            <BsCart2 className="icon" />
            Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex">
            <BsCart3 className="icon" />
            Brands
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex">
            <BsCart3 className="icon" />
            Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex">
            <BsCart3 className="icon" />
            Customers
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="" className="flex">
            <BsCart3 className="icon" />
            Users
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex">
            <BsCart3 className="icon" />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
