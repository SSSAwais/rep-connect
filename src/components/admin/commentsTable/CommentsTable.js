import React, { useRef, forwardRef, useEffect } from "react";
import MaterialTable from "material-table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import imagge from "../../../assets/images/Profile/profile.png";
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
import axios from "axios";
import Image from "next/image";
import Spinner from "@/components/spinner/Spinner";
import "./commentsTable.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import ReplayModal from "../replayModal/ReplayModal";
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
const CommentsTable = () => {
  const [approved, setApproved] = useState(true);
  const defaultMaterialTheme = createTheme();
  const [replay, setReplay] = useState(false);
  const [entries, setEnteries] = useState([
    {
      id: 1,
      author: "test",
      comment: "comment",
      response: "response",
      submitted: "submitted",
      subscription: "subscription",
      para: "hello",
      image: imagge,
      ip: "198.168.10.48",
    },
    {
      id: 2,
      image: imagge,
      ip: "198.168.10.48",
    },
    {
      id: 3,
      image: imagge,
      ip: "198.168.10.48",
    },
    {
      id: 4,
      image: imagge,
      ip: "198.168.10.48",
    },
    {
      id: 5,
      image: imagge,
      ip: "198.168.10.48",
    },
  ]);

  const _handleApproved = (id) => {
    console.log(id);
    setApproved(!approved);
  };
  const _handleReplaySection = () => {
    setReplay(!replay);
  };

  const columns = [
    {
      title: "Author",
      field: "author",
      render: (rowData) => (
        <div className="d-flex">
          <Image src={rowData.image} alt="image" height={40} cwidth={40} />
          <div className="profile_detail">
            <p>{rowData.author} </p>
            <a href="#">
              test@test.com
              <span>
                <i className="fa-solid fa-copy"></i>
              </span>
            </a>
            <a href="#">
              {rowData.ip}
              <span>
                <i className="fa-solid fa-copy"></i>
              </span>
            </a>
          </div>
        </div>
      ),
    },

    {
      title: "Comment",
      field: "comment",
      render: (rowdata) => (
        <>
          <div className="commentss">
            <p>
              In reply to <a href="">testing</a>
            </p>
            <p>Hi,</p>
            <p>This is testing</p>
          </div>
          <div className="secondComments">
            <p>
              <a href="#" onClick={() => _handleApproved(rowdata.id)}>
                Unapprove
              </a>{" "}
              |{" "}
              <a href="#" className="approve">
                Approve
              </a>{" "}
              |{" "}
              <a onClick={_handleReplaySection} href="#">
                Reply
              </a>{" "}
              | <Link href="/admin/comments/edit-comment">Edit</Link> |{" "}
              <a href="#">Spam</a> |<a href="#">Trash</a>
            </p>
          </div>
        </>
      ),
    },
    {
      title: "In response to",
      field: "response",
      render: (rowdata) => (
        <div className="inresponse">
          <Link href={`/admin/comments/edit-post/${rowdata.id}`}>
            Candida auris sales piece
          </Link>
          <a href="#">View Post</a>
          <a href="#" className="total_comment">
            <i className="fa-solid fa-message"></i>
            <span>5</span>
          </a>
        </div>
      ),
    },
    {
      title: "Submitted on",
      field: "submitted",
      render: (item) => <p className="date_submit">2023/07-06 at 7.22am</p>,
    },
    {
      title: "Subscription",
      field: "subscription",
      render: (item) => <p className="subs">subscription</p>,
    },
  ];
  return (
    <>
      {replay ? (
        <ReplayModal _handleReplaySection={_handleReplaySection} />
      ) : (
        ""
      )}
      <div className="all_Comments_section">
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            title="Comments"
            icons={tableIcons}
            columns={columns}
            data={entries}
            // actions={[
            //   {
            //     icon: () => <DeleteIcon />,
            //     tooltip: "Remove",
            //     onClick: (event, data) => hanldeDeleted(event, data),
            //   },
            //   {
            //     icon: () => <VisibilityOutlinedIcon />,
            //     tooltip: "View",

            //     onClick: (event, data) => _handleView(event, data),
            //   },
            //   {
            //     icon: () => <Edit />,
            //     tooltip: "Update ",
            //     onClick: (event, data) => hanldeUpdated(event, data),
            //   },
            // ]}
            // isLoading={isLoading}
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
      </div>
    </>
  );
};

export default CommentsTable;
