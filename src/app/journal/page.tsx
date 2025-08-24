
import { MainLayout } from '@/components/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

// This is mock data. In a real app, this would come from user storage.
const mockTrades = [
  { id: 1, date: '2024-07-28', ticker: 'AAPL', direction: 'Long', outcome: '+2.5R', notes: 'Followed plan perfectly.' },
  { id: 2, date: '2024-07-27', ticker: 'TSLA', direction: 'Short', outcome: '-1.0R', notes: 'Entered too early, FOMO.' },
  { id: 3, date: '2024-07-26', ticker: 'NVDA', direction: 'Long', outcome: '+3.0R', notes: 'Great trend continuation trade.' },
];

export default function JournalPage() {
  return (
    <MainLayout>
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Trading Journal</h1>
                    <p className="text-muted-foreground font-body">Your logbook for continuous improvement.</p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Entry
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Trade History</CardTitle>
                    <CardDescription>Review your past performance to find your edge.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Ticker</TableHead>
                                <TableHead>Direction</TableHead>
                                <TableHead>Outcome</TableHead>
                                <TableHead>Notes</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockTrades.length > 0 ? (
                                mockTrades.map((trade) => (
                                    <TableRow key={trade.id}>
                                        <TableCell>{trade.date}</TableCell>
                                        <TableCell>{trade.ticker}</TableCell>
                                        <TableCell>{trade.direction}</TableCell>
                                        <TableCell className={trade.outcome.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                                            {trade.outcome}
                                        </TableCell>
                                        <TableCell className="max-w-xs truncate">{trade.notes}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">No trades logged yet.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    </MainLayout>
  );
}
