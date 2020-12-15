export default function DashboardPage(props) {
    return (
    <main className="Page">
        <h1 id='title2'>Welcome to the Food Diary {props.user.name}!</h1>
        <p2>Here in this app you can keep track of your meals and add/edit/ delete them anytime you find convenient.
        Your entries are divided into 4 meals Breaksfast, Lunch, Snack and Dinner.
        Each meal can be filled with upto 3 items of your desired quantity.
        Click 'Food Entries' to get started!</p2>
    </main>
    );
};