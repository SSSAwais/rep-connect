import React, { useRef, forwardRef, useEffect } from "react";
import MaterialTable from "material-table";
import { useState } from "react";
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

import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import moment from "moment/moment";

import { ToastContainer, toast } from "react-toastify";
import "./productcart.css";
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

const ProductCart = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
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
      field: "cover_image.image",
      render: (item) => {
        return (
          <Image
            src={item.cover_image.image.url}
            alt={item.name}
            height={60}
            width={60}
          />
        );
      },
    },
    {
      title: "Product",
      field: "name",
      render: (item) => {
        return <span className="ad-pro-title">{item.name}</span>;
      },
    },
    {
      title: "Category",
      field: "category.name",
    },
    {
      title: "Stock Quantity",
      filed: "stock_quantity",
      render: (item) => {
        return item.stock_quantity;
      },
    },
    {
      title: "Price",
      field: "regular_price",
    },
    {
      title: "Sale Price",
      field: "sale_price",
    },
    {
      title: "Published",
      field: "createdAt",
      render: (item) => {
        return moment(item.createdAt).format("LL");
      },
    },
  ];

  const [entries, setEnteries] = useState([]);
  const hanldeDeleted = (event, data) => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product/${data._id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === 1) {
          setIsLoading(false);
          toast.success("Product delete Success fully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          getAllProduct();
        } else {
          toast.warn("Product not delete successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };
  const hanldeViewd = (event, id) => {
    router.push(`/admin/product/view-product/${id}`);
  };

  const getAllProduct = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === 1) {
          setEnteries(data.data.products);
          setIsLoading(false);
        } else {
          setIsError(true);
          setIsLoading(false);
          setErrorMessage(data.message);
        }
      });
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  const hanldeUpdated = (event, id) => {
    router.push(`/admin/product/product-update/${id}`);
  };

  return (
    <>
      {isError ? (
        <h2>{errorMessage}</h2>
      ) : (
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
                  // tooltip: "Remove",
                  onClick: (event, data) => hanldeDeleted(event, data),
                },
                {
                  icon: () => <Edit />,
                  // tooltip: "Change Status",
                  onClick: (event, data) => hanldeUpdated(event, data._id),
                },
                {
                  icon: () => <VisibilityOutlinedIcon />,
                  // tooltip: "Change Status",
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
      )}
    </>
  );
};

export default ProductCart;
