using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

public class Dichvukhachsan
{
   
    public string? MA_DV { get; set; }

    public string? Tendichvu { get; set; }

    public double? Gia { get; set; }

    public string? Mota { get; set; } 

    public string? Diadiem { get; set; }

    public string? Loai {get; set; }

}
