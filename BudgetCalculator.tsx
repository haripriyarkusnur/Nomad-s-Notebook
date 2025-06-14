
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Currency } from 'lucide-react';

interface BudgetCalculatorProps {
  destination: any;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ destination }) => {
  const [days, setDays] = useState('3');
  const [people, setPeople] = useState('2');
  const [stayType, setStayType] = useState('budget');
  const [budget, setBudget] = useState<any>(null);

  const calculateBudget = () => {
    const numDays = parseInt(days);
    const numPeople = parseInt(people);
    
    // Base rates per person per day (in local currency)
    const baseRates = {
      budget: {
        accommodation: 1500,
        food: 800,
        transport: 600,
        activities: 1000,
        miscellaneous: 500
      },
      luxury: {
        accommodation: 8000,
        food: 3000,
        transport: 2000,
        activities: 4000,
        miscellaneous: 2000
      }
    };

    const rates = baseRates[stayType as keyof typeof baseRates];
    
    const totalBudget = {
      accommodation: rates.accommodation * numDays * numPeople,
      food: rates.food * numDays * numPeople,
      transport: rates.transport * numDays,
      activities: rates.activities * numDays * numPeople,
      miscellaneous: rates.miscellaneous * numDays * numPeople
    };

    const grandTotal = Object.values(totalBudget).reduce((sum, amount) => sum + amount, 0);

    setBudget({
      breakdown: totalBudget,
      total: grandTotal,
      perPerson: grandTotal / numPeople,
      perDay: grandTotal / numDays
    });
  };

  useEffect(() => {
    calculateBudget();
  }, [days, people, stayType]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Budget Calculator
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Estimate your trip cost for {destination.name}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-600">
              <Currency className="h-5 w-5" />
              <span>Trip Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="days">Number of Days</Label>
                <Input
                  id="days"
                  type="number"
                  min="1"
                  max="30"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="people">Number of People</Label>
                <Input
                  id="people"
                  type="number"
                  min="1"
                  max="20"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label>Type of Stay</Label>
              <Select value={stayType} onValueChange={setStayType}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget Travel</SelectItem>
                  <SelectItem value="luxury">Luxury Travel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={calculateBudget}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            >
              Calculate Budget
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        {budget && (
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-blue-600">Estimated Budget</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <span>Accommodation</span>
                  <span className="font-semibold">{formatCurrency(budget.breakdown.accommodation)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <span>Food & Dining</span>
                  <span className="font-semibold">{formatCurrency(budget.breakdown.food)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <span>Transportation</span>
                  <span className="font-semibold">{formatCurrency(budget.breakdown.transport)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <span>Activities</span>
                  <span className="font-semibold">{formatCurrency(budget.breakdown.activities)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <span>Miscellaneous</span>
                  <span className="font-semibold">{formatCurrency(budget.breakdown.miscellaneous)}</span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total Budget</span>
                  <span className="text-green-600">{formatCurrency(budget.total)}</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p>Per person: {formatCurrency(budget.perPerson)}</p>
                  <p>Per day: {formatCurrency(budget.perDay)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
