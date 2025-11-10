import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Ruler } from 'lucide-react'

const sizeData = {
  tops: [
    { size: 'XS', bust: '32-34', waist: '24-26', hips: '34-36' },
    { size: 'S', bust: '34-36', waist: '26-28', hips: '36-38' },
    { size: 'M', bust: '36-38', waist: '28-30', hips: '38-40' },
    { size: 'L', bust: '38-40', waist: '30-32', hips: '40-42' },
    { size: 'XL', bust: '40-42', waist: '32-34', hips: '42-44' },
  ],
  bottoms: [
    { size: 'XS', waist: '24-25', hips: '34-35', inseam: '30' },
    { size: 'S', waist: '26-27', hips: '36-37', inseam: '30' },
    { size: 'M', waist: '28-29', hips: '38-39', inseam: '31' },
    { size: 'L', waist: '30-31', hips: '40-41', inseam: '31' },
    { size: 'XL', waist: '32-33', hips: '42-43', inseam: '32' },
  ]
}

export const SizeGuide = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Ruler className="h-4 w-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Size Guide</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8 mt-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">How to Measure</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium mb-1">Bust</p>
                <p className="text-muted-foreground">Measure around the fullest part of your bust</p>
              </div>
              <div>
                <p className="font-medium mb-1">Waist</p>
                <p className="text-muted-foreground">Measure around your natural waistline</p>
              </div>
              <div>
                <p className="font-medium mb-1">Hips</p>
                <p className="text-muted-foreground">Measure around the fullest part of your hips</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tops & Dresses</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-2 px-3">Size</th>
                    <th className="text-left py-2 px-3">Bust (inches)</th>
                    <th className="text-left py-2 px-3">Waist (inches)</th>
                    <th className="text-left py-2 px-3">Hips (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeData.tops.map((row) => (
                    <tr key={row.size} className="border-b">
                      <td className="py-2 px-3 font-medium">{row.size}</td>
                      <td className="py-2 px-3">{row.bust}</td>
                      <td className="py-2 px-3">{row.waist}</td>
                      <td className="py-2 px-3">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Bottoms</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-2 px-3">Size</th>
                    <th className="text-left py-2 px-3">Waist (inches)</th>
                    <th className="text-left py-2 px-3">Hips (inches)</th>
                    <th className="text-left py-2 px-3">Inseam (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeData.bottoms.map((row) => (
                    <tr key={row.size} className="border-b">
                      <td className="py-2 px-3 font-medium">{row.size}</td>
                      <td className="py-2 px-3">{row.waist}</td>
                      <td className="py-2 px-3">{row.hips}</td>
                      <td className="py-2 px-3">{row.inseam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-muted p-4 text-sm">
            <p className="font-medium mb-2">Fit Notes</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• All measurements are in inches</li>
              <li>• For between sizes, we recommend sizing up</li>
              <li>• Our pieces are designed for a relaxed, elegant fit</li>
              <li>• Contact us for personalized fit advice</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
