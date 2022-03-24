import java.sql.*;

public class Driver {

    public static void main(String[] args) {

        try{
            //Get connection
            Connection myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/ImageGallery", "root", "1234" );

            //Create statement
            Statement myStmt = myConn.createStatement();

            //Execute SQL query
            ResultSet myRs = myStmt.executeQuery("select * from images where id = '1'");

            //process result
            while (myRs.next()) {
                System.out.println(myRs.getBlob("image"));
            }


        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

//jar://C:/Users/Domlu/Downloads/mysql-connector-java-8.0.28/mysql-connector-java-8.0.28/mysql-connector-java-8.0.28.jar!/

