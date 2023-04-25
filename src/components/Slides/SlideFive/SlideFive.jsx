import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const CompetitiveAnalysisTable = () => {
  return (
    <div className="table">
      <TableContainer className="table" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Features/Services</TableCell>
              <TableCell>CodeNected</TableCell>
              <TableCell>Catchafire</TableCell>
              <TableCell>VolunteerMatch</TableCell>
              <TableCell>Taproot Foundation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Target Audience</TableCell>
              <TableCell>Students, skilled volunteers, non-profits</TableCell>
              <TableCell>Skilled volunteers, non-profits</TableCell>
              <TableCell>Volunteers, non-profits</TableCell>
              <TableCell>Skilled volunteers, non-profits</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AI-driven Discovery Process</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Focus on Skills Development</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>No</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Corporate Partnerships</TableCell>
              <TableCell>Maybe yours</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tailored Virtual Project Platform</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Focus on student collaboration</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Detailed Validation & Refinement of Services
              </TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompetitiveAnalysisTable;
