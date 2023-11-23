// breadcum code in layout page:
//   <UMBreadcumb
//         items={[
//           {
//             label: `${base}`,
//             link: `/${base}`,
//           },
//           {
//             label: `student`,
//             link: `/${base}`,
//           },
//         ]}
//       />

// Breadcrumb Component Code
// import React from "react";
// import { Breadcrumb } from "antd";
// import Link from "next/link";
// import { HomeOutlined } from "@ant-design/icons";

// type IItems = {
//   label: string;
//   link: string;
// }[];

// const UMBreadcumb = ({ items }: IItems) => {
//   const breadCrumbItems = [
//     {
//       title: (
//         <Link href="/">
//           <HomeOutlined />
//         </Link>
//       ),
//     },
//     ...items.map((item: any) => {
//       return {
//         title: item.link ? (
//           <Link href={item.link}>{item.label}</Link>
//         ) : (
//           <span>{item.label}</span>
//         ),
//       };
//     }),
//   ];
//   return <Breadcrumb items={breadCrumbItems}></Breadcrumb>;
// };

// export default UMBreadcumb;
