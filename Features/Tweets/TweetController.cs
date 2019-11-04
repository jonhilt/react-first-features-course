using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyTweets.Features.Tweets;

[Route("[controller]")]
[ApiController]
public class TweetController : ControllerBase
{
    private readonly IMediator mediator;

    public TweetController(IMediator mediator)
    {
        this.mediator = mediator;
    }

    [HttpGet]
    public async Task<IActionResult> List()
    {
        var model = await mediator.Send(new List.Query());
        return Ok(model);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Post.Command command)
    {
        var model = await mediator.Send(command);
        return Ok(model);
    }
}