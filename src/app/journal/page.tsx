
"use client";

import { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlusCircle, Bot, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { NewJournalEntryForm } from '@/components/NewJournalEntryForm';
import { JournalAnalytics } from '@/components/JournalAnalytics';


// This is mock data. In a real app, this would come from user storage.
const mockTrades = [
  { id: 1, date: '2024-07-28', ticker: 'AAPL', direction: 'Long', outcome: '+2.5R', notes: 'Followed plan perfectly.' },
  { id: 2, date: '2024-07-27', ticker: 'TSLA', direction: 'Short', outcome: '-1.0R', notes: 'Entered too early, FOMO.' },
  { id: 3, date: '2024-07-26', ticker: 'NVDA', direction: 'Long', outcome: '+3.0R', notes: 'Great trend continuation trade.' },
  { id: 4, date: '2024-07-25', ticker: 'GOOG', direction: 'Long', outcome: '-1.0R', notes: 'Revenge trade after the TSLA loss. Bad discipline.' },
  { id: 5, date: '2024-07-24', ticker: 'AAPL', direction: 'Long', outcome: '+1.5R', notes: 'Good entry, but I exited too early out of fear.' },

];

export interface Trade {
  id: number;
  date: string;
  ticker: string;
  direction: 'Long' | 'Short';
  outcome: string; // e.g. "+2.5R" or "-1.0R"
  notes: string;
}

export default function JournalPage() {
  const [trades, setTrades] = useState<Trade[]>(mockTrades);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  const addTrade = (newTradeData: Omit<Trade, 'id'|'outcomeR'>) => {
    const newTrade: Trade = {
      id: trades.length > 0 ? Math.max(...trades.map(t => t.id)) + 1 : 1,
      ...newTradeData
    };
    setTrades(prevTrades => [newTrade, ...prevTrades]);
  };
  
  const deleteTrade = (tradeId: number) => {
    setTrades(prevTrades => prevTrades.filter(t => t.id !== tradeId));
  }

  return (
    <MainLayout>
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Trading Journal</h1>
                    <p className="text-muted-foreground font-body">Your logbook for continuous improvement.</p>
                </div>
                <div className="flex w-full sm:w-auto gap-2">
                   <Dialog open={isAnalysisOpen} onOpenChange={setIsAnalysisOpen}>
                      <DialogTrigger asChild>
                         <Button variant="outline" className="w-full">
                            <Bot className="mr-2 h-4 w-4" />
                            Analyze My Journal
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>AI Journal Analysis</DialogTitle>
                        </DialogHeader>
                        <JournalAnalytics trades={trades} />
                      </DialogContent>
                    </Dialog>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full">
                          <PlusCircle className="mr-2 h-4 w-4" />
                          New Entry
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Trade</DialogTitle>
                        </DialogHeader>
                        <NewJournalEntryForm onSubmit={addTrade} onFinished={() => setIsDialogOpen(false)} />
                      </DialogContent>
                    </Dialog>
                </div>
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
                                <TableHead className="hidden sm:table-cell">Date</TableHead>
                                <TableHead>Ticker</TableHead>
                                <TableHead>Direction</TableHead>
                                <TableHead>Outcome</TableHead>
                                <TableHead className="hidden md:table-cell">Notes</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {trades.length > 0 ? (
                                trades.map((trade) => (
                                    <TableRow key={trade.id}>
                                        <TableCell className="hidden sm:table-cell">{trade.date}</TableCell>
                                        <TableCell>{trade.ticker}</TableCell>
                                        <TableCell>{trade.direction}</TableCell>
                                        <TableCell className={trade.outcome.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                                            {trade.outcome}
                                        </TableCell>
                                        <TableCell className="max-w-xs truncate hidden md:table-cell">{trade.notes}</TableCell>
                                        <TableCell className="text-right">
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <Trash2 className="h-4 w-4 text-destructive" />
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            This action cannot be undone. This will permanently delete this journal entry.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction onClick={() => deleteTrade(trade.id)}>
                                                            Delete
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center">No trades logged yet.</TableCell>
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
