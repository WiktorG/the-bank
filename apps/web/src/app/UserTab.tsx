import dayjs from "dayjs";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function UserTab() {
  const dummyUsers = [
    {
      id: 1,
      clerkId: "clerk-1",
      firstName: "John",
      lastName: "Doe",
      createdAt: "2021-01-01",
    },
    {
      id: 2,
      clerkId: "clerk-2",
      firstName: "Jane",
      lastName: "Doe",
      createdAt: "2021-01-01",
    },
    {
      id: 3,
      clerkId: "clerk-3",
      firstName: "John",
      lastName: "Smith",
      createdAt: "2021-01-01",
    },
    {
      id: 4,
      clerkId: "clerk-4",
      firstName: "Jane",
      lastName: "Smith",
      createdAt: "2021-01-01",
    },
  ];

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>

      <CardContent className="pl-2">
        <Table>
          <TableCaption>A list of users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Clerk ID</TableHead>
              <TableHead>First name</TableHead>
              <TableHead>Last name</TableHead>
              <TableHead className="text-right">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyUsers.map((user) => (
              <TableRow key={user.clerkId}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.clerkId}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell className="text-right">
                  {dayjs(user.createdAt).format("YYYY-MM-DD")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}