import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// import { classNames } from "primereact/utils";
import { FilterMatchMode } from "primereact/api";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { BookingHistoryDummyData } from "../../DataSource/BookingHistoryData";
import HeaderItem from "../../features/Header/Header";


interface BookingHistoryData {
  id: number;
  RoomName: string,
  BookingDate: string,
  TimeSlot: string
}

export default function BookingHistory() {
    const navigate = useNavigate()
  const [roomname, setroomname] = useState<BookingHistoryData[]>([]);
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    RoomName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    BookingDate: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    TimeSlot: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");

  useEffect(() => {
    BookingHistoryDummyData.getBookings().then((data: BookingHistoryData[]) => {
      setroomname(getRoomname(data));
      setLoading(false);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getRoomname = (data: BookingHistoryData[]) => {
    return [...(data || [])].map((d) => {
      // @ts-ignore
      d.bookingDatedate = new Date(d.bookingDate);

      return d;
    });
  };

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    // @ts-ignore
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };
  const actionsBodyTemplate = (rowData: BookingHistoryData) => {
    return (
      <div >
        <Button severity="danger" onClick={() => handleOutlookClick(rowData)} style={{marginRight: '.5rem'}}>Delete</Button>
        <Button severity="warning" onClick={() => handleTeamsClick(rowData)}>Reschedule</Button>
      </div>
    );
  };

  const handleOutlookClick = (rowData: BookingHistoryData) => {
    // Handle the Outlook button click for the specific row here
    console.log("Outlook button clicked for row with ID:", rowData.id);
  };

  const handleTeamsClick = (rowData: BookingHistoryData) => {
    // Handle the Teams button click for the specific row here
    console.log("Teams button clicked for row with ID:", rowData.id);
  };
  const header = renderHeader();

  return (
    <div>
        <HeaderItem />
        <div style={{display:'flex', justifyContent: 'flex-start',marginBottom:'1rem', marginTop: '1rem'}}>
        <Button label="Main Page" severity="info" outlined onClick={() =>navigate('/MainPage')} style={{marginLeft:'1rem'}}/>
        <h1 style={{textAlign:'center'}}>Booking History</h1>
        </div>
        
    <div className="card">
      <DataTable
        value={roomname}
        paginator
        rows={10}
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        loading={loading}
        globalFilterFields={[
          "RoomName",
          "BookingDate",
          "TimeSlot",
        ]}
        header={header}
        emptyMessage="No rooms found."
        
      >
        <Column
          field="RoomName"
          header="RoomName"
          filter
          filterPlaceholder="Search by room name"
          style={{ minWidth: "12rem", padding: '1rem' }}
        />
    
        <Column
          field="BookingDate"
          header="Booking Date"
          filterField="BookingDate"
          showFilterMenu={false}
          filterMenuStyle={{ width: "14rem" }}
          style={{ minWidth: "14rem" }}
          
        />
        <Column
          field="TimeSlot"
          header="Time Slot"
          showFilterMenu={false}
          filterMenuStyle={{ width: "14rem" }}
          style={{ minWidth: "12rem" }}
         
        />
        <Column
          field="actions"
          header="Actions"
          style={{ minWidth: "15rem" }}
          body={actionsBodyTemplate}
        />
      </DataTable>
    </div>
    </div>
  );
}
