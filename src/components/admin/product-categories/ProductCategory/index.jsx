import React, { forwardRef, useEffect, useState } from "react";
import MaterialTable from "material-table";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import { TablePagination, Paper } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import { ThemeProvider, createTheme } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/navigation";

const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  View: forwardRef((props, ref) => (
    <VisibilityOutlinedIcon {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
};

const ProductCategory = () => {
  const router = useRouter();
  const defaultMaterialTheme = createTheme();
  const columns = [
    {
      title: "Sr",
      field: "_id",
      render: (rowData) => {
        return <p>{rowData.tableData.id + 1}</p>;
      },
    },
    {
      title: "Image",
      field: "image",
      render: (item) => {
        return (
          <Image
            src={item.image.image.url}
            alt={item.name}
            height={60}
            width={60}
          />
        );
      },
    },
    { title: "Name", field: "name" },

    {
      title: "Published",
      field: "createdAt",
      render: (item) => {
        return moment(item.createdAt).format("LL");
      },
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  const [entries, setEnteries] = useState([]);
  const hanldeDELETEapi = (id) => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product-category/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success === 1) {
          setIsLoading(false);
          toast.success("Category Delete Successfully");
          hanldeGetApiCategory();
        } else {
          setIsLoading(false);
          toast.error(data.error.message);
        }
      });
  };
  const hanldeDeleted = (event, id) => {
    hanldeDELETEapi(id);
    // console.log(id);
  };
  const hanldeUpdated = (event, id) => {
    router.push(`/admin/product/product-categories/update/${id}`);
  };
  const hanldeViewd = (data, id) => {
    router.push(`/admin/product/product-categories/view/${id}`);
  };

  const hanldeGetApiCategory = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product-category/`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === 1) {
          setIsLoading(false);
        }
        setEnteries(data.data.category);
      });
  };

  useEffect(() => {
    hanldeGetApiCategory();
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          title="Product"
          icons={tableIcons}
          columns={columns}
          data={entries}
          actions={[
            {
              icon: () => <DeleteIcon />,
              onClick: (event, data) => hanldeDeleted(event, data._id),
            },
            {
              icon: () => <Edit />,
              onClick: (event, data) => hanldeUpdated(event, data._id),
            },
            {
              icon: () => <VisibilityOutlinedIcon />,
              onClick: (event, data) => hanldeViewd(event, data._id),
            },
          ]}
          isLoading={isLoading}
          options={{
            // pageSize: 10,
            // pageSizeOptions: [5, 10, 15, 20],
            actionsColumnIndex: -1,
            exportButton: false,
            sorting: true,
            search: true,
            paging: true,
            debounceInterval: 100,
            headerStyle: {
              fontWeight: "bold",
            },
          }}
          components={{
            Pagination: (props) => <TablePagination {...props} />,
            Container: (props) => <Paper {...props} elevation={0} />,
          }}
        />
      </ThemeProvider>
      <ToastContainer />
    </React.Fragment>
  );
};

export default ProductCategory;
