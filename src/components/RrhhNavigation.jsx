import { useNavigate } from "react-router-dom";
import classNames from "../utils/ClassNames";
import { UsersIcon } from "../components/icons/UsersIcon";
import { DocumentTextIcon } from "../components/icons/DocumentTextIcon";
import { DocumentPlusIcon } from '../components/icons/DocumentPlusIcon'

export default function RrhhNavigation() {
  const navigate = useNavigate();

  const navigationHHRR = [
    {
      name: "Licencias",
      href: "licenses",
      icon: DocumentTextIcon,
      current: false,
    },
    {
      name: "Agregar licencia",
      href: "add-licenses",
      icon: DocumentPlusIcon,
      current: false,
    },
    {
      name: "Agregar licencia",
      href: "add-licenses",
      icon: DocumentPlusIcon,
      current: false,
    },
    { name: "Perfil", href: "perfil", icon: UsersIcon, current: false },
  ];

  const nav = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      {navigationHHRR.map((item) => (
        <a
          key={item.name}
          className={classNames(
            item.current
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            "group flex items-center rounded-md px-2 py-2 text-base font-medium"
          )}
          onClick={() => nav(item.href)}
        >
          <item.icon
            className={classNames(
              item.current
                ? "text-gray-500"
                : "text-gray-400 group-hover:text-gray-500",
              "mr-4 h-6 w-6 flex-shrink-0"
            )}
            aria-hidden="true"
          />
          {item.name}
        </a>
      ))}
    </>
  )
}