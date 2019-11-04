using MediatR;
using System.Threading;
using System.Threading.Tasks;
using MyTweets.Data;

namespace MyTweets.Features.Tweets
{
    public class Post
    {
        public class Command : IRequest
        {
            public string Text { get; set; }
        }
    }
    
    public class CommandHandler : AsyncRequestHandler<Post.Command>
    {
        private readonly Store store;

        public CommandHandler(Store store)
        {
            this.store = store;
        }

        protected override async Task Handle(Post.Command request, CancellationToken cancellationToken)
        {
            store.Add(new Tweet { Contents = request.Text });
        }
    }
}