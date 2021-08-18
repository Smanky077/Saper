using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SaperApi.Controllers
{
    public class StatisticController : ApiController
    {
       public IHttpActionResult GetInfo(int id)
        {
            return Ok();
        }
        
    }
}
