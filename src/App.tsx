import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import type { ColDef } from "ag-grid-community";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);
interface RowData {
  name: string;
  age: number;
  country: string;
  role: string;
}

function App() {
  const [currentUserRole, setCurrentUserRole] = useState<"admin" | "user">("user");

  const [rowData] = useState<RowData[]>([
    { name: "wafaa", age: 22, country: "Palestine", role: "admin" },
    { name: "omar",  age: 25, country: "Palestine", role: "user"  },
    { name: "hind",  age: 30, country: "Palestine", role: "user"  },
  ]);

 
const columnDefs: ColDef<RowData>[] = [
  { field: "name",    editable: () => currentUserRole === "admin", sortable: true  },
  { field: "age",     editable: () => currentUserRole === "admin", sortable: true  },
  { field: "country", editable: () => currentUserRole === "admin", sortable: false },
  { field: "role",    editable: false,                             sortable: false },
];
  return (
    <div style={{ height: "100vh", padding: "20px" }}>

      <div style={{ marginBottom: 16, display: "flex", gap: 10 }}>
        <button
          onClick={() => setCurrentUserRole("admin")}
          style={{
            padding: "8px 20px",
            background: currentUserRole === "admin" ? "#a3347e" : "#e4d4de",
            color: currentUserRole === "admin" ? "white" : "black",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Admin
        </button>
        <button
          onClick={() => setCurrentUserRole("user")}
          style={{
            padding: "8px 20px",
            background: currentUserRole === "user" ? "#a3347e" : "#e4d4de",
            color: currentUserRole === "user" ? "white" : "black",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          User
        </button>
        <span style={{ alignSelf: "center", color: "#b3559e" }}>
          {currentUserRole === "admin" ? " Editing enabled" : " Read-only"}
        </span>
      </div>

      <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
        />
      </div>
    </div>
  );
}

export default App;