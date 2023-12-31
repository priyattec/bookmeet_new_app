import React, { useState, useEffect } from "react";
// import { classNames } from "primereact/utils";
import { FilterMatchMode } from "primereact/api";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DummyBookings } from "../../DataSource/DummyBookings";

interface DummyBookingData {
  id: number;
  organizer: string;
  orgEmail: string;
  bookingDate: string;
  timeslot: string;
}

export default function BookingSlot() {
  const [organizers, setOrganizers] = useState<DummyBookingData[]>([]);
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    organizers: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    orgEmails: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    bookingDate: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    timeslot: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");

  useEffect(() => {
    DummyBookings.getOrganizers().then((data: DummyBookingData[]) => {
      setOrganizers(getOrganizers(data));
      setLoading(false);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getOrganizers = (data: DummyBookingData[]) => {
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
  const actionsBodyTemplate = (rowData: DummyBookingData) => {
    return (
      <div >
        <Button severity="info" onClick={() => handleOutlookClick(rowData)} style={{marginRight: '.5rem'}}>Outlook</Button>
        <Button severity="info" onClick={() => handleTeamsClick(rowData)}>Teams</Button>
      </div>
    );
  };

  const handleOutlookClick = (rowData: DummyBookingData) => {
    // Handle the Outlook button click for the specific row here
    console.log("Outlook button clicked for row with ID:", rowData.id);
  };

  const handleTeamsClick = (rowData: DummyBookingData) => {
    // Handle the Teams button click for the specific row here
    console.log("Teams button clicked for row with ID:", rowData.id);
  };
  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        value={organizers}
        paginator
        rows={10}
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        loading={loading}
        globalFilterFields={[
          "organizer",
          "orgEmail",
          "bookingDate",
          "timeslot",
        ]}
        header={header}
        emptyMessage="No organizers found."
      >
        <Column
          field="organizer"
          header="Organizer"
          filter
          filterPlaceholder="Search by name"
          style={{ minWidth: "12rem" }}
        />
        <Column
          field="orgEmail"
          header="Organizer Email"
          filterField="orgEmail"
          style={{ minWidth: "12rem" }}
          filter
          filterPlaceholder="Search by email"
        />
        <Column
          field="bookingDate"
          header="Booking Date"
          filterField="bookingDate"
          showFilterMenu={false}
          filterMenuStyle={{ width: "14rem" }}
          style={{ minWidth: "14rem" }}
          
        />
        <Column
          field="timeslot"
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
  );
}
