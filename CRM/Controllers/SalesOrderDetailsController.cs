using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CRM.Data;
using CRM.Models;

namespace CRM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesOrderDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public SalesOrderDetailsController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/SalesOrderDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SalesOrderDetails>>> GetSalesOrderDetails()
        {
            return await _context.SalesOrderDetails.ToListAsync();
        }

        // GET: api/SalesOrderDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SalesOrderDetails>> GetSalesOrderDetails(int id)
        {
            var salesOrderDetails = await _context.SalesOrderDetails.FindAsync(id);

            if (salesOrderDetails == null)
            {
                return NotFound();
            }

            return salesOrderDetails;
        }

        // PUT: api/SalesOrderDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalesOrderDetails(int id, SalesOrderDetails salesOrderDetails)
        {
            if (id != salesOrderDetails.ID)
            {
                return BadRequest();
            }

            _context.Entry(salesOrderDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalesOrderDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SalesOrderDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SalesOrderDetails>> PostSalesOrderDetails(SalesOrderDetails salesOrderDetails)
        {
            _context.SalesOrderDetails.Add(salesOrderDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSalesOrderDetails", new { id = salesOrderDetails.ID }, salesOrderDetails);
        }

        // DELETE: api/SalesOrderDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalesOrderDetails(int id)
        {
            var salesOrderDetails = await _context.SalesOrderDetails.FindAsync(id);
            if (salesOrderDetails == null)
            {
                return NotFound();
            }

            _context.SalesOrderDetails.Remove(salesOrderDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SalesOrderDetailsExists(int id)
        {
            return _context.SalesOrderDetails.Any(e => e.ID == id);
        }
    }
}
